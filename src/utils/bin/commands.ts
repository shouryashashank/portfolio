// List of commands that do not require API calls
import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  var imp_commands = ["about", "banner", "cat", "cd", "donate", "echo", "email", "github", "help", "linkedin", "ls", "nano", "neofetch", "predacons", "projects", "readme", "repo", "resume", "sudo", "weather", "whoami"];
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (imp_commands.includes(Object.keys(bin).sort()[i - 1])) {
      continue;
    }

    else if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:

about           <span style="color: lightblue;">Who is Shourya Shashank?</span>
banner          <span style="color: lightblue;">Display banner.</span>
email           <span style="color: lightblue;">Send me an email.</span>
github          <span style="color: lightblue;">Open GitHub profile.</span>
linkedin        <span style="color: lightblue;">Open LinkedIn profile.</span>
predacons       <span style="color: lightblue;">Display Predacons.</span>
projects        <span style="color: lightblue;">Display GitHub projects.</span>
readme          <span style="color: lightblue;">Display GitHub README.</span>
repo            <span style="color: lightblue;">Open GitHub repository.</span>
resume          <span style="color: lightblue;">Display resume.</span>
donate          <span style="color: lightblue;">Support my work.</span>
cat             <span style="color: lightblue;">Display file content.</span>
cd              <span style="color: lightblue;">Change directory.</span>
echo            <span style="color: lightblue;">Print arguments.</span>
help            <span style="color: lightblue;">Display this help text.</span>
ls              <span style="color: lightblue;">List files.</span>
nano            <span style="color: lightblue;">Open nano.</span>
neofetch        <span style="color: lightblue;">Display Users information.</span>
sudo            <span style="color: lightblue;">Run command as superuser.</span>
weather         <span style="color: lightblue;">Display weather.</span>
whoami          <span style="color: lightblue;">Display username.</span>

Other Commands :
${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'neofetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:

I'm Shourya Shashank, a dedicated engineer with a dual degree in Mining Engineering & Safety Engineering from the Indian Institute of Technology, Kharagpur. My technical skills span across C#, Python, Java, SQL, Rust, TensorFlow, PyTorch, Azure, Docker, Kubernetes, and AI tools. Currently, I am an Advanced Software Development Engineer at Honeywell, where I lead the development of large-scale, cloud-native industrial software, ensuring high application availability and optimized performance.

At Honeywell, I have been responsible for managing Azure infrastructure, designing Python expression evaluators, improving inter-microservice communication, and utilizing technologies like Druid for efficient time-series data management. My contributions have resulted in significant improvements in data backfill speed, operational efficiency, and scalability. Additionally, I've successfully migrated legacy application calculations using AI tools, saving thousands of manual workdays and reducing human errors.

I'm passionate about open-source development and actively contribute to various projects. One of my key projects is Predacons, a versatile Python library for simplified training and fine-tuning of large language models (LLMs). Predacons offers user-friendly functions for data handling and model training, automated optimization, and an OpenAI-compatible web server for hosting LLM models. My work on Predacons has significantly enhanced output generation speed and lowered barriers to entry for complex NLP tasks, empowering developers and researchers.

My commitment to innovation and excellence is reflected in my impactful projects and successful internships at Honeywell and Quest Global. With experience in system architecture, cloud infrastructure, and AI tools, I am a valuable asset in the technology landscape. Combining theoretical knowledge with practical skills, I continue to drive advancements in software engineering.

'neofetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest. 
here are the ways you can support my work:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `
cv.md
aboutme.txt
contact.txt
<span style="color: lightblue;">secret_folder</span>
<span style="color: lightblue;">do_not_open</span>`;
};

export const cat = async (args: string[]): Promise<string> => {
  
  var files = await fetchFiles();
  if (files[args[0]]) {
    return files[args[0]];
  } else if (args[0] === 'aboutme.txt') {
    return 'Opening aboutme.txt...';
  } else if (args[0] === 'contact.txt') {
    return 'Opening contact.txt...';
  }
  return `cat: ${args[0]}: No such file or directory`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.
or try with elevated permisions.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};
export const nano = async (args: string[]): Promise<string> => {
  return `nano? really? just use 'vi'.`;
};
export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
███████╗██╗  ██╗ ██████╗ ██╗   ██╗██████╗ ██╗   ██╗ █████╗                                 ${config.name}
██╔════╝██║  ██║██╔═══██╗██║   ██║██╔══██╗╚██╗ ██╔╝██╔══██╗                                <u><a href="${config.resume_url}" target="_blank">resume</a></u>
███████╗███████║██║   ██║██║   ██║██████╔╝ ╚████╔╝ ███████║                               爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
╚════██║██╔══██║██║   ██║██║   ██║██╔══██╗  ╚██╔╝  ██╔══██║                               
███████║██║  ██║╚██████╔╝╚██████╔╝██║  ██║   ██║   ██║  ██║                                <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
╚══════╝╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝                                <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>      
Welcome to my interactive web terminal.                                                    <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
                                                                                          
Type 'help' to see the list of available commands.                                         <u><a href="${config.donate_urls.patreon}" target="_blank">${config.donate_urls.patreon}</a></u>
Type 'neofetch' to display summary.                                      
`;
};
async function fetchFiles(): Promise<{ [key: string]: string }> {
  const cv = await fetch('https://raw.githubusercontent.com/shouryashashank/cv/refs/heads/main/README.md').then(response => response.text());
  return {
    'cv.md': cv,
    'aboutme.txt': 'Content of aboutme.txt',
    'contact.txt': 'Content of contact.txt'
  };
}

