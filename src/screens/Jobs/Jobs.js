import {FlatList,View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {JobsItem} from '../../components/'
import {getJobsApi} from '../../services'


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
      <FlatList data={jobsdata} renderItem={renderJobs} keyExtractor={item => item.id.toString()} />
    </View>
  );
};

export default Jobs;

