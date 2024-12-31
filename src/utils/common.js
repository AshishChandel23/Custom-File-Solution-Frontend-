export const formatBytes = (bytes, targetUnit = 'MB') => {
    const sizes= ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const index = sizes.indexOf(targetUnit.toUpperCase());
    if (index === -1) {
      throw new Error(`Invalid target unit. Valid units are: ${sizes.join(', ')}`);
    }
    if (bytes === 0) return 0;
    const convertedSize = bytes / Math.pow(1024, index);
    const rounded = Math.round(convertedSize * 100) / 100;     
    return rounded;
};