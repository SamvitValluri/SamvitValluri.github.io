import type { Skill, SkillCategory } from './types';
import type { StringWithAutoComplete } from '@riadh-adrani/utils';
import { omit } from '@riadh-adrani/utils';
import Assets from './assets';
import svelteMd from './md/svelte.md?raw';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Design & Analysis Software', slug: 'CAD' }),
	defineSkillCategory({ name: 'Python Libraries', slug: 'pylib' }),
	defineSkillCategory({ name: '', slug: 'blank' })

] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => {
	return items.filter((it) => (slugs.length === 0 ? true : slugs.includes(it.slug)));
};

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};

const title = 'Skills';

const items = [
	defineSkill({
		slug: 'py',
		color: 'yellow',
		description:
			'',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'cpp',
		color: 'blue',
		description:
			'',
		logo: Assets.Cpp,
		name: 'C++',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'Matlab',
		color: 'orange',
		description:
			'',
		logo: Assets.Matlab,
		name: 'Matlab',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'Solidworks',
		color: 'red',
		description:
			'',
		logo: Assets.Solidworks,
		name: 'Solidworks',
		category: 'CAD'
	}),
	defineSkill({
		slug: 'Catia',
		color: 'blue',
		description:
			'',
		logo: Assets.Blank,
		name: 'Catia',
		category: 'CAD'
	}),
	defineSkill({
		slug: 'ANSYS',
		color: 'yellow',
		description:
			'',
		logo: Assets.ANSYS,
		name: 'Ansys',
		category: 'CAD'
	}),
	defineSkill({
		slug: 'ABAQUS',	
		color: 'blue',
		description:
			'',
		logo: Assets.Blank,
		name: 'Abaqus',
		category: 'CAD'
	}),
	defineSkill({
		slug: 'Fusion360',
		color: 'orange',
		description:
			'',
		logo: Assets.Fusion360,
		name: 'Fusion 360',
		category: 'CAD'
	}),
	defineSkill({
		slug: 'np',
		color: 'cyan',
		description:
			'',
		logo: Assets.Numpy,
		name: 'Numpy',
		category: 'pylib'
	}),
	defineSkill({
		slug: 'pytorch',
		color: 'orange',
		description:
			'',
		logo: Assets.Pytorch,
		name: 'Pytorch',
		category: 'pylib'
	}),
	defineSkill({
		slug: 'pandas',
		color: 'purple',
		description:
			'',
		logo: Assets.Pandas,
		name: 'Pandas',
		category: 'pylib'
	}),
	defineSkill({
		slug: 'tensorflow',
		color: 'orange',
		description:
			'',
		logo: Assets.Tensorflow,
		name: 'Tensorflow',
		category: 'pylib'
	}),	
	defineSkill({
		slug: 'alteryx_d',
		color: 'blue',
		description:
			'',
		logo: Assets.Alteryx_Designer,
		name: 'Alteryx Designer',
		category: 'blank'
	}),	
	defineSkill({
		slug: 'xl',
		color: 'green',
		description:
			'',
		logo: Assets.Blank,
		name: 'Microsoft Excel',
		category: 'blank'
	}),	
	defineSkill({
		slug: 'R',
		color: 'green',
		description:
			'',
		logo: Assets.Blank,
		name: 'R',
		category: 'pro-lang'
	}),	
	defineSkill({
		slug: 'SQL',
		color: 'blue',
		description:
			'',
		logo: Assets.Blank,
		name: 'SQL',
		category: 'pro-lang'
	}),	
] as const;

const SkillsData = {
	title,
	items
};

export default SkillsData;
