export const addFeatures = newFeature => {
    console.log('added features',newFeature);
    return { type: "ADD_FEATURE", payload: newFeature};
};

export const removeFeature = featureRemoved => {
    console.log('feature removed');
    return { type: 'REMOVED_FEATURE', payload: featureRemoved};
};