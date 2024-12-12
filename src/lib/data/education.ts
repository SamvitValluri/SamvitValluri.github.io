import Assets from './assets';
import type { Education } from './types';

const title = 'Education';

const items: Array<Education> = [
	{
		degree: 'Bachelor of Science- BS,Mechanical Engineering',
		description: '',
		location: 'West Lafayette, IN',
		logo: Assets.Purdue,
		name: 'Purdue',
		organization: 'Purdue',
		period: { from: new Date(2018, 7, 1), to: new Date(2022, 4, 1) },
		shortDescription: '',
		slug: 'Purdue',
		subjects: []
	}
];

const EducationData = { title, items };

export default EducationData;
