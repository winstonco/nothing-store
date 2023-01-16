// stripe configs
export const CURRENCY = 'USD';
export const MIN_AMOUNT = 1;
export const MAX_AMOUNT = 1000;

const checkConfigs = () => {
  let failedCheck = false;
  if (
    (CURRENCY !== undefined && typeof CURRENCY !== 'string') ||
    (MIN_AMOUNT !== undefined && typeof MIN_AMOUNT !== 'number') ||
    (MAX_AMOUNT !== undefined && typeof MAX_AMOUNT !== 'number')
  ) {
    failedCheck = true;
  }
  if (failedCheck) {
    throw new Error('Check _config.ts');
  }
};

export default checkConfigs;
