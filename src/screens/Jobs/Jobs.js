import {Button, FlatList, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {JobsItem} from '../../components/'
import {getJobsApi} from '../../services'

const Jobs = ({navigation}) => {
 const [jobsdata, setJobsData] = useState([]);

    useEffect(()=>{
        fetchJobs();
    },[]);

 const fetchJobs = () =>{
    getJobsApi()
        .then(fetchJobs =>{
            setJobsData(fetchJobs.results)
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

