import firebase from "core/init/firebase";

const fireBaseRef = "timeline";

const TimelineService = {
  deleteTimelineItem: async (id, uid) => {
    return await firebase
      .database()
      .ref("/" + fireBaseRef + uid + "/" + id)
      .remove();
  },
  addTimelineItem: async (form, uid) => {
    return await firebase.database().ref(fireBaseRef + uid).push({
      createdAt: firebase.database.ServerValue.TIMESTAMP,
      date: form.date,
      bodyWeight: form.bodyWeight,
      happinessLevel: form.happinessLevel,
      hipWidth: form.hipWidth,
      waistWidth: form.waistWidth,
    });
  },
  editTimelineItem: async (form, uid) => {
    return await firebase
      .database()
      .ref("/" + fireBaseRef  + uid + "/" + form.id)
      .update({
        date: form.date,
        bodyWeight: form.bodyWeight,
        happinessLevel: form.happinessLevel,
        hipWidth: form.hipWidth,
        waistWidth: form.waistWidth,
      });
  },
  pullTimelineItems: async (uid) => {
    return await firebase.database().ref(fireBaseRef + uid).once("value");
  },
};

export default TimelineService;
