import React from 'react';
import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class ReadStory extends React.Component{
    constructor(){
        super()
        this.state={
          author: '',
          title: '',
          story: ''
        }
    }

        fieldDataHandler = async ()=>{
            const storypPage = db.collection('stories').doc('story')

            const doc = await storypPage.get();

            if (!docT.exists && !docA.exists && !docS.exists) {
                alert('No such document!');
            } 
            else{
                this.setState({
                    author: authorDB,
                    title: titleDB,
                    story: storyDB
                })
            }   
            
        }

    render(){
        return(
            <View>
                <TouchableOpacity onPress={()=>{
                    this.fieldDataHandler();
                }}>
                <Text>ReadStory</Text>
                </TouchableOpacity>
                <Text>{this.state.title}</Text>
                <Text>{this.state.story}</Text>
                <Text>{this.state.author}</Text>
            </View>
        )
    }

}