<!--<script lang="ts">
	import Assets from '$lib/data/assets';
	import type { Experience } from '$lib/data/types';
	import { computeExactDuration, getMonthAndYear, href } from '$lib/utils';
	import { ellipsify } from '@riadh-adrani/utils';
	import { mode } from 'mode-watcher';
	import SkillBadge from '../common/skill-badge/skill-badge.svelte';
	import { Avatar, AvatarFallback } from '../ui/avatar';
	import AvatarImage from '../ui/avatar/avatar-image.svelte';
	import { Badge } from '../ui/badge';
	import { CardContent, CardTitle } from '../ui/card';
	import FancyCard from '../ui/card/fancy-card.svelte';
	import Icon from '../ui/icon/icon.svelte';
	import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
	import Muted from '../ui/typography/muted.svelte';

	const { it }: { it: Experience } = $props();

	const exactDuration = computeExactDuration(it.period.from, it.period.to);

	let from = $derived(getMonthAndYear(it.period.from));
	let to = $derived(getMonthAndYear(it.period.to));

	let period = $derived(`${from} - ${to}`);

	let badges = $derived([
		{ label: it.company, icon: 'i-carbon-building', tooltip: 'Company' },
		{ label: it.location, icon: 'i-carbon-location', tooltip: 'Location' },
		{ label: it.contract, icon: 'i-carbon-hourglass', tooltip: 'Contract Type' }
	] as const);
</script>

<FancyCard color={it.color} href={href(`/experience/${it.slug}`)}>
	<CardContent class="flex flex-col gap-8 sm:flex-row">
		<Avatar>
			<AvatarFallback>
				<img src={Assets.Unknown.light} alt={it.name} />
			</AvatarFallback>
			<AvatarImage src={$mode === 'dark' ? it.logo.dark : it.logo.light} />
		</Avatar>
		<div class="flex flex-col gap-4">
			<CardTitle>{it.name}</CardTitle>
			<div class="flex flex-row flex-wrap gap-1">
				{#each badges as badge (badge.icon)}
					<Tooltip openDelay={300}>
						<TooltipTrigger>
							<Badge variant="secondary" class="flex flex-row items-center gap-1">
								<Icon icon={badge.icon} />
								{badge.label}
							</Badge>
							<TooltipContent>{badge.tooltip}</TooltipContent>
						</TooltipTrigger>
					</Tooltip>
				{/each}
			</div>
			<Tooltip openDelay={300}>
				<TooltipTrigger>
					<Muted className="flex flex-row items-center gap-2">
						<Icon icon="i-carbon-calendar" />
						<div>{period}</div>
					</Muted>
				</TooltipTrigger>
				<TooltipContent>Date range</TooltipContent>
			</Tooltip>
			<Tooltip openDelay={300}>
				<TooltipTrigger>
					<Muted className="flex flex-row items-center gap-2">
						<Icon icon="i-carbon-time" />
						<div>{exactDuration}</div>
					</Muted>
					<TooltipContent side="bottom">Exact duration</TooltipContent>
				</TooltipTrigger>
			</Tooltip>
			<div>{ellipsify(it.shortDescription, 150)}</div>
			<div class="flex flex-row flex-wrap gap-2">
				{#each it.skills as skill (skill.slug)}
					<SkillBadge {skill} />
				{/each}
			</div>
		</div>
	</CardContent>
</FancyCard>
-->

<script lang="ts">
	import Assets from '$lib/data/assets';
	import type { Project } from '$lib/data/types';
	import { computeExactDuration, getMonthAndYear, href } from '$lib/utils';
	import { ellipsify } from '@riadh-adrani/utils';
	import { mode } from 'mode-watcher';
	import ButtonLink from '../common/button-link/button-link.svelte';
	import SkillBadge from '../common/skill-badge/skill-badge.svelte';
	import AvatarFallback from '../ui/avatar/avatar-fallback.svelte';
	import AvatarImage from '../ui/avatar/avatar-image.svelte';
	import Avatar from '../ui/avatar/avatar.svelte';
	import Badge from '../ui/badge/badge.svelte';
	import Button from '../ui/button/button.svelte';
	import { CardHeader } from '../ui/card';
	import CardContent from '../ui/card/card-content.svelte';
	import CardFooter from '../ui/card/card-footer.svelte';
	import CardTitle from '../ui/card/card-title.svelte';
	import FancyCard from '../ui/card/fancy-card.svelte';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuItem,
		DropdownMenuTrigger
	} from '../ui/dropdown-menu';
	import Icon from '../ui/icon/icon.svelte';
	import Separator from '../ui/separator/separator.svelte';
	import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
	import Muted from '../ui/typography/muted.svelte';

	const { project }: { project: Project } = $props();

	let from = $derived(getMonthAndYear(project.period.from));
	let to = $derived(getMonthAndYear(project.period.to));
	let exactDuration = $derived(computeExactDuration(project.period.from, project.period.to));
</script>

<FancyCard
	color={project.color}
	class="flex h-full flex-col"
	href={href(`//experience/${it.slug}}`)}
>
	<CardHeader class="flex w-full flex-col gap-4">
		<Avatar>
			<AvatarFallback>
				<img src={Assets.Unknown.light} alt={project.name} />
			</AvatarFallback>
			<AvatarImage src={$mode === 'dark' ? project.logo.dark : project.logo.light} />
		</Avatar>
		<div class="flex w-full flex-row items-center gap-1 overflow-x-hidden">
			<CardTitle class="h-auto min-w-0 flex-1 overflow-x-hidden">
				<Tooltip>
					<TooltipTrigger
						class="w-full overflow-y-auto overflow-x-hidden"
					>
						{project.name}
					</TooltipTrigger>
					<TooltipContent>{project.name}</TooltipContent>
				</Tooltip>
			</CardTitle>
			{#if project.links.length > 2}
				<ButtonLink link={project.links[0]} />
				<DropdownMenu>
					<DropdownMenuTrigger>
						<Button size="icon" variant="outline"
							><Icon icon="i-carbon-overflow-menu-vertical" /></Button
						>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						{#each project.links.slice(1) as link (link.to)}
							<a href={link.to} target={'_blank'}>
								<DropdownMenuItem>
									{link.label}
								</DropdownMenuItem>
							</a>
						{/each}
					</DropdownMenuContent>
				</DropdownMenu>
			{:else}
				{#each project.links as link (link.to)}
					<ButtonLink {link} />
				{/each}
			{/if}
		</div>
		<Separator />
	</CardHeader>
	<CardContent class="flex flex-1 flex-col gap-4">
		<Muted className="flex flex-row gap-2 items-center">
			<Icon icon="i-carbon-assembly-cluster" />
			<Muted>{project.type}</Muted>
		</Muted>
		<Muted className="flex flex-row gap-2 items-center">
			<!--<Icon icon="i-carbon-time" />
			<Muted>{exactDuration}</Muted>-->
		</Muted>
		<Muted className="flex-1">{ellipsify(project.shortDescription, 100)}</Muted>
		<div class="flex w-full flex-row items-center justify-between">
			<Badge variant="outline">{from}</Badge>
			<Badge variant="outline">{to}</Badge>
		</div>
		<Separator />
	</CardContent>
	<CardFooter class="flex flex-row flex-wrap items-center gap-2">
		{#each project.skills as skill (skill.slug)}
			<SkillBadge {skill} />
		{/each}
	</CardFooter>
</FancyCard>

