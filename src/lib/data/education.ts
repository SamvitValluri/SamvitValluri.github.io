import Assets from './assets';
import type { Education } from './types';

const title = 'Education';

const items: Array<Education> = [
	{
		degree: 'Bachelor of Science- BS,Mechanical Engineering',
		description: '',
		location: 'West Lafayette',
		logo: Assets.Unknown,
		name: '',
		organization: 'Purdue',
		period: { from: new Date(2018, 7, 1), to: new Date(2022, 4, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C', 'Algorithm', 'Algebra', 'Python', 'C++', 'Java', 'English']
	}
];

const EducationData = { title, items };

export default EducationData;
