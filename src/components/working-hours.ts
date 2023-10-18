import { h } from 'snabbdom';
import { Store } from '../store';
import { BackgroundActionType } from '../background/store/action-types';
import { ActionType } from '../store/action-types';

export const WorkingHours = (store: Store) => {
	const state = store.getState().settings;
	if (state == null) return null;

	const { activeDays, startTime, endTime } = state;

	const onDayToggle = (day: string) => {
		store.dispatch({
			type: ActionType.BACKGROUND_ACTION,
			action: { type: BackgroundActionType.TOGGLE_ACTIVE_DAY, day },
		});
	};

	const onStartTimeChange = (e: Event) => {
		const time = (e.target as HTMLInputElement).value;
		store.dispatch({
			type: ActionType.BACKGROUND_ACTION,
			action: { type: BackgroundActionType.SET_START_TIME, time },
		});
	};

	const onEndTimeChange = (e: Event) => {
		const time = (e.target as HTMLInputElement).value;
		store.dispatch({
			type: ActionType.BACKGROUND_ACTION,
			action: { type: BackgroundActionType.SET_END_TIME, time },
		});
	};

	return h('div.v-stack-2', [
		h('h2', 'Working Hours'),
		h('div.v-stack', [
			...Object.keys(activeDays).map((day) =>
				h('div', [
					h('input', {
						attrs: {
							type: 'checkbox',
							id: day,
							checked: activeDays[day].isActive,
						},
						on: { change: () => onDayToggle(day) },
					}),
					h('label', { attrs: { for: day } }, day),
				])
			),
			h('div.h-stack', [
				h('label', { attrs: { for: 'start-time' } }, 'Start Time:'),
				h('input', {
					attrs: {
						type: 'time',
						id: 'start-time',
						name: 'start-time',
						value: startTime,
						required: true,
					},
					on: { change: onStartTimeChange },
				}),
			]),
			h('div.h-stack', [
				h('label', { attrs: { for: 'end-time' } }, 'End Time:'),
				h('input', {
					attrs: {
						type: 'time',
						id: 'end-time',
						name: 'end-time',
						value: endTime,
						required: true,
					},
					on: { change: onEndTimeChange },
				}),
			]),
		]),
	]);
};
