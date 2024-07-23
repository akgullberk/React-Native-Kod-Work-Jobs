import {FlatList, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {JobsItem} from '../../components/'
import {getJobsApi} from '../../services'
import { fromString } from 'html-to-text';

const Jobs = ({navigation}) => {
 const [jobsdata, setJobsData] = useState([]);

 const stripHtml = (html) => {
  return html.replace(/<[^>]*>?/gm, '');
}


    useEffect(()=>{
        fetchJobs();
    },[]);

    const fetchJobs = () => {
      getJobsApi()
        .then(fetchJobs => {
          const cleanedJobs = fetchJobs.results.map(job => ({
            ...job,
            contents: stripHtml(job.contents)
          }));
          setJobsData(cleanedJobs);
        })
        .catch(error => {
          console.error("hata:", error);
        });
    };



  const renderJobs = ({item}) => (
    <JobsItem jobItem={item} onPress={() => navigation.navigate('Details', {jobItem: item})} />
  );


  return (
    <View>
      <FlatList data={jobsdata} renderItem={renderJobs} />
    </View>
  );
};

export default Jobs;

