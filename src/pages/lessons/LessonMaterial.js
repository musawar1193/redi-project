import React, { Component } from 'react'
import {lessonsCollection} from '../../services/FireBaseStore'
import Sandbox from '../../components/Sandbox'

class LessonMaterial extends Component {

    constructor(props){
        super(props);
        this.state = {
            lesson_id : this.props.match.params.lesson_id,
            sandbox : [],
            material: []
            };

    }

    componentDidMount() {

        const collections = ['sandbox','material'];
        collections.forEach(collection => {
            this.fetchLessonsMaterial(collection).catch(error=>{console.log(error)});
        });

    }

    //fetch Lessons Material
    fetchLessonsMaterial = async (collection_id) => {

        const lesson_id = this.state.lesson_id;
        const Snapshot = await lessonsCollection.doc(lesson_id).collection(collection_id).get();
        const collection_data = Snapshot.docs.map(doc => {
            let data = doc.data();
            data.id =  doc.id;
            return data;
        });

        this.setState({ [`${collection_id}`]: collection_data }, ()=>{
            console.log(this.state);
        });

    };


    render() {

        return (
            <>
                {

                    (this.state.sandbox) &&
                    this.state.sandbox.map((value) => (
                        <Sandbox details={value} key={value.id}/>
                    ))
                }

            </>
        )
    }
}
export default LessonMaterial;
