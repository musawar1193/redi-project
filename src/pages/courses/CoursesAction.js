import {coursesCollection, database} from '../../services/FireBaseStore'

export const fetchCourses = async (pram) => {

    let courses = [];
    coursesCollection.get().then(Snapshot => {

        Snapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            let data = doc.data();
                data.id =  doc.id;
                courses.push(data);
           // console.log(doc.id, " => ", doc.data());
        });

    });
console.log(courses);
    return courses;
};
