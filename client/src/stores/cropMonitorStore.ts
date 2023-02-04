import { writable, derived } from 'svelte/store';

interface ICropMonitorData {
  // data fields for crop monitoring
  cropId: string;
  cropName: string;
  date: string;
  temperature: number;
  humidity: number;
  soilMoisture: number;
}

let cropMonitorData: ICropMonitorData[] = [];

const cropMonitorStore = writable(cropMonitorData);

// derived store to get the latest data for crop monitoring
export const latestCropMonitorData = derived(
  cropMonitorStore,
  ($cropMonitorStore) => $cropMonitorStore[$cropMonitorStore.length - 1]
);

// function to update the crop monitoring data
export const updateCropMonitorData = (data: ICropMonitorData) => {
  cropMonitorStore.update((prevData) => [...prevData, data]);
};

// function to reset the crop monitoring data
export const resetCropMonitorData = () => {
  cropMonitorStore.set([]);
};
