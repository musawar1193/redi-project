import React, { Component } from 'react'
import {lessonsCollection} from '../../services/FireBaseStore'
import {Lesson} from "./Lesson";



class Lessons extends Component {

    constructor(props){
        super(props);
        this.state = {
            lessonsLoading : true
        };

    }

    componentDidMount() {
        this.fetchLessons().catch(error=>{console.log(error)});

    }

    //fetch courses
    fetchLessons = async (pram) => {


        const Snapshot = await lessonsCollection.get();
        const lessons = Snapshot.docs.map(doc => {
            let data = doc.data();
            data.id =  doc.id;
            return data;
        });

        this.setState({lessons, lessonsLoading : false }, ()=>{
            console.log(this.state);
        });

    };

    render() {

        return (
            <>
                {

                    this.state.lessonsLoading === false &&
                    this.state.lessons.map((lesson) => (
                        <Lesson lesson={lesson} />
                    ))
                }

            </>
        )
    }
}
export default Lessons;
