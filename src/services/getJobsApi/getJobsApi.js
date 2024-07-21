import { getJobs } from "../NetWorkUrl";
import { get } from "../main";

const getJobsApi = () =>{
    const jobUrl = getJobs;
    return get(jobUrl);
};

export{getJobsApi};