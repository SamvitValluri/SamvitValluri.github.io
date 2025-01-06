import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Project } from './types';
import { href } from '$lib/utils';


const title = 'Projects';

const items: Array<Project> = [

	/*{
		slug: 'slick-portfolio-svelte',
		color: '#ff3e00',
		description:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		shortDescription:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'Slick Portfolio',
		period: {
			from: new Date()
		},
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Website Template',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]
	},*/
	{
		slug: 'ME563',
		color: '#ff3e00',
		description:
			'',
		shortDescription:
			'',
		links: [{}],
		logo: Assets.PSR,
		name: 'Mechatronics Project',
		period: {
			from: new Date(2022, 1, 1), to: new Date(2022, 4, 1)
		},
		skills: getSkills('cpp', 'Solidworks', 'Matlab'),
		type: '',
	},
	{
		slug: 'ME463',
		color: '#ff3e00',
		description:
			'',
		shortDescription:
			'',
		links: [{}],
		logo: Assets.PSR,
		name: 'Senior Design Project',
		period: {
			from: new Date(2022, 0, 1), to: new Date(2022, 4, 1)
		},
		skills: getSkills('cpp', 'Solidworks', 'ANSYS'),
		type: '',
	},
	{
		slug: 'solar',
		color: '#ff3e00',
		description:
			'',
		shortDescription:
			'',
		links: [{}],
		logo: Assets.PSR,
		name: 'Purdue Solar Racing',
		period: {
			from: new Date(2019, 0, 1), to: new Date(2020, 11, 1)
		},
		skills: getSkills('Fusion360'),
		type: '',
	},
	{
		slug: 'PSP',
		color: '#ff3e00',
		description:
			 `# Pokemon_Battle_AI

Project Summary:

In this project I wrote a Deep Learning program using Tensorflow that Is designed to Play Compeditive pokemon. 
Pokemon Can be treated as a strategy game just like Chess or Go. Inspired by the Accomplishments of Google's 
DeepMind team, I decided to try and build a program that plays Pokemon competitively. 

The Abilities of Deep Learning are Limited by two main factors: Training Data and Computational power. These two 
Limitations were the Main Challenges of this project and most of my time went into solving them. In order to get 
a Large quantity of High Quality Training Data I had to teach myself web-scraping to collect data from battles 
between highly ranked players. Since Computational power is something I don't have a huge abundance of, I built 
a Python Extension in C++ to handle the Loading of Certain Large files that had a specific format (the C++ code 
takes 0.007 seconds to load a file whereas my original python code took 0.4 seconds).

Unfortunately, I was not able to collect enough data to get this project to work. My Test data set shows that the 
network has a 50/50 shot at guessing the winner so I know for a fact that I am experiencing overfitting. I'm 
continuing to collect data and have tried lowering the ELO threshold that I use to filter out sub-par players but 
to no avail. This project therefor has been a Biting example of the dependency of Deep Learning algorithms on 
large quantities of data.


Replay Data

The Data that this project uses may cause issues if you download this source code for a number of reasons. I've written
this Summary to tell you how to solve various problems you might come across

The program Expects to have replays of pokemon battles saved in a binary format that can be read from and wirtten to
through the "pokereplay" module. Since there are about 300 MB of Replays they have been ommitted from the git. However
all of the replays that are used as training data are available on pokemonshowdown.com and the program can scrape the
data off of that website. Simply run the Parser Program and all the replays you do not have will be saved.

as far as New Replays are concerned, I am using a safari webdriver to click a "more results" button to obtain my list
of replays. if you do not have safari you can either work with the data set I have collected or switch the webdriver
to Chrome, Firefox, etc.


Project Structure:

Many parts of this project are placeholders for the time when I get an acceptable training accuracy. There is little
to nothing in the following files

- Battle_Bot.py
- Engine.py
- GUI.py

Summaries of python files:


- Replay Web Scraper

The Replay web Scraper is a program that scrapes pokemonshowdown.com/replays for training data. It's Job is not to
*Collect* data but to *Identify* it. Replays are not stored until the Rating of the Replay has been identified. The
Collection process is done by the Parser.py


- Parser

Parses the text of a pokemon showdown replay to find Features used for the Neural Net. Such Features include which
pokemon attacks first, when Items activate, when Abilities Activate, etc. Once the Parser has Identifed these features
they are stored locally using the "pokereplay" extention


- Pokereplay

C++ code that saves the saliant data for a battle replay locally. Optimized for speed.


- AI_Trainer

AI Trainer Initalizes and Trains a Tensorflow Neural Network that Esimates the Probability of winning a given game of
Pokemon. The AI estimates the Probability of winning the game given that a certian choice is made. To calculate this
there are three kinds of input data: The Choice to be made, the Turns of the Battle Up until the Chioce is made and the
Teams that Each Player is Using. 


- Training Data Generator:

Data Pre-Processing such as PCA. In order to not use 40+ GB of RAM This Section also Uses Generators to send data.

`,
		shortDescription:
			'Created a MATLAB Simulink model using various rocket component characteristics and environmental characteristics to verify and validate the rocket trajectory',
		links: [{to: 'https://purdueseds.space/wp-content/uploads/psp-sl/casper/cdr/Purdue%20University%20-%202020%20CDR%20Presentation.pdf', label : 'Flight Readiness Review Presentation'},
				{to: 'https://purdueseds.space/wp-content/uploads/psp-sl/casper/frr/Purdue%20University%20-%202020%20FRR%20Report.pdf', label: 'Flight Readiness Review Report'}
		],
		logo: Assets.PSP,
		name: 'Purdue Space Program',
		period: {
			from: new Date(2019, 7, 1), to: new Date(2020, 11, 1)
		},
		skills: getSkills('Matlab', 'Solidworks'),
		type: '',
	},
];

const ExperienceData = { title, items };

export default ExperienceData;

