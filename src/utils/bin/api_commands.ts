// // List of commands that require API calls

import { getProjects } from '../api';
import { getQuote } from '../api';
import { getReadme } from '../api';
import { getWeather } from '../api';
import { getPredaconsProjects } from '../api';

export const projects = async (args: string[]): Promise<string> => {
  const projects = await getProjects();
  const predacons_projects = await getPredaconsProjects();
  const predaconsText = `<span style="color: lightblue;">Predacons: </span> Predacons is a versatile Python library designed to simplify the training and fine-tuning of large language models (LLMs).`
  const projectsList = projects
    .filter((repo) => repo.stargazers_count >= 1)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .map(
      (repo) =>
        `<span style="color: lightgreen;"><a class="text-light-blue dark:text-dark-blue underline" href="${repo.html_url}" target="_blank">${repo.name}</a></span> -  ${repo.description} `,
    )
    .join('\n');

  const predaconsProjectsList = predacons_projects
    .map(
      (repo) =>
        `<span style="color: lightgreen;"><a class="text-light-blue dark:text-dark-blue underline" href="${repo.html_url}" target="_blank">${repo.name}</a></span> -  ${repo.description} `,
    )
    .join('\n');

  return `\n${predaconsText}\n---\n${predaconsProjectsList}\n\n---\n\n${projectsList}`;
};

export const quote = async (args: string[]): Promise<string> => {
  const data = await getQuote();
  return data.quote;
};

export const readme = async (args: string[]): Promise<string> => {
  const readme = await getReadme();
  return `Opening GitHub README...\n
  ${readme}`;
};

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');
  if (!city) {
    return 'Usage: weather [city]. Example: weather casablanca';
  }
  const weather = await getWeather(city);
  return weather;
};

const fetchFiles = async (): Promise<{ [key: string]: string }> => {
  const cv = await fetch('https://raw.githubusercontent.com/shouryashashank/cv/refs/heads/main/README.md').then(response => response.text());
  return {
    'cv.md': cv,
    'aboutme.txt': 'Content of aboutme.txt',
    'contact.txt': 'Content of contact.txt'
  };
};

