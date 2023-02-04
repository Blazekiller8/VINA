import {get, post, put, del} from './api';

const CROP_MONITOR_API_URL = '/crop-monitor';

export async function fetchCropMonitorData() {
    return await get(CROP_MONITOR_API_URL);
}

export async function updateCropMonitorData(id: string, data: any) {
    return await put(`${CROP_MONITOR_API_URL}/${id}`, data);
}

export async function addCropMonitorData(data: any) {
    return await post(CROP_MONITOR_API_URL, data);
}

export async function deleteCropMonitorData(id: string) {
    return await del(`${CROP_MONITOR_API_URL}/${id}`);
}
