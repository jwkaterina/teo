import { API } from "aws-amplify";
import { Weight } from "../component/weight";
import { ApiError } from "./error";

export const getWeights = async (year: number): Promise<Weight[]> => {
    const init = {
        headers: {
            'Content-Type' : 'application/json',
        }
    };
    const res = await API.get("teo", `/weight/${year}`, init);
    if(!res.success) {
        throw new ApiError(`Could not load Weights: ${res.error}`);
    }
    return res.data.map((dto: any) => new Weight(dto.id, dto.weight, dto.date));
}

export const updateWeight = async (weight: Weight): Promise<Weight> => {
    const init = {
        headers: {
            'Content-Type' : 'application/json',
        },
        body: weight.toDto()
    };
    const res = await API.put("teo", "/weight/", init);
    if(!res.success) {
        throw new ApiError(`Could not update the Weight: ${res.error}`);
    }
    const dto = res.data;
    return new Weight(dto.id, dto.weight, dto.date);
}

export const createWeight = async (weight: number, date: string): Promise<Weight> => {
    const init = {
        headers: {
            'Content-Type' : 'application/json',
        },
        body: {
            weight,
            date
        }
    };
    const res = await API.post("teo", "/weight/", init);
    if(!res.success) {
        throw new ApiError(`Could not create the Weight: ${res.error}`);
    }
    const dto = res.data;
    return new Weight(dto.id, dto.weight, dto.date);
}

export const deleteWeight = async (weight: Weight): Promise<boolean> => {
    const init = {
        headers: {}
    };
    const res = await API.del("teo", `/weight/object/${weight.year}/${weight.id}`, init);
    if(!res.success) {
        throw new ApiError(`Could not delete the Weight: ${res.error}`);
    }
    return true;
}