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
`
## Objective
- Design, build, test, and fly a student-crafted launch vehicle to a predetermined altitude
- To carry a payload consisting of an unmanned aerial system (UAS) capable of collecting a lunar ice sample and moving it a set distance
## Avionics Sub-Team
- Created a MATLAB Simulink model using various rocket component characteristics and environmental characteristics to verify and validate the rocket trajectory obtained from OpenRocket and RAS Aero II. The code was within 10% of the actual value for the apogee
of the launch. 
- Conducted various tests to highlight any failure modes and ensure the working of components such as the altimeter, main and drogue parachute, and black powder charges to ensure the flight would meet the safety and technical requirements
- Designed the avionics bay in Solidworks to house the recovery hardware, including altimeters and ejection charges, andperformed a structural analysis on the bulkheads during parachute deployment to ensure the device was within the factor
of safety
`,
		shortDescription:
			'Avionics Sub-Team',
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
		screenshots: [
			{
				label: 'Avionics CAD',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
		]
	},
];

const ExperienceData = { title, items };

export default ExperienceData;

