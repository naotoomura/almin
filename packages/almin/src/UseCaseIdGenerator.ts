/**
 * UseCase incremental count is for Unique ID.
 */
let _UseCaseCount: number = 0;
/**
 * create new id
 */
export const generateNewId = (): string => {
    _UseCaseCount++;
    return String(`UseCase__${_UseCaseCount}`);
};
