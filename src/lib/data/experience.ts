import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';


const title = 'Projects';

const items: Array<Experience> = [
	{
		slug: 'ME463',
		company: '',
		description: '',
		contract: ContractType.Freelance,
		type: '',
		location: '',
		period: { from: new Date(2022, 0, 1), to: new Date() },
		skills: getSkills('css', 'html', 'js'),
		name: 'Automated Table Tennis Paddle Manufacturer',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	}
];

const ExperienceData = { title, items };

export default ExperienceData;

