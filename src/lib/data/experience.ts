import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';


const title = 'Projects';

const items: Array<Experience> = [
	{
		slug: 'ME463',
		company: 'Self-employed',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2022, 0, 1), to: new Date() },
		skills: getSkills('css', 'html', 'js'),
		name: 'Junior Freelancer',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome applications for customers.'
	}
];

const ExperienceData = { title, items };

export default ExperienceData;

