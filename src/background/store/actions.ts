import {
	BackgroundActionType,
	SetEndTime,
	SetStartTime,
	ToggleActiveDay,
} from './action-types';

export function toggleActiveDay(day: string): ToggleActiveDay {
	return { type: BackgroundActionType.TOGGLE_ACTIVE_DAY, day };
}

export function setStartTime(time: string): SetStartTime {
	return { type: BackgroundActionType.SET_START_TIME, time };
}

export function setEndTime(time: string): SetEndTime {
	return { type: BackgroundActionType.SET_END_TIME, time };
}
