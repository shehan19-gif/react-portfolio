import '../page-css/Qualification.css'

const qualificationData = [
  {
    id: 1,
    course: "Diploma in Information Technology",
    institute: "University of Canteburry",
    skills: '',
    achievements: []
  },
  {
    id: 2,
    course: "Diploma in Graphic Design",
    institute: "University of Christchurch",
    skills: '',
    achievements: []
  },
  {
    id: 3,
    course: "Diploma in Hardware Technologies",
    institute: "University of Canteburry",
    skills: '',
    achievements: []
  },
  {
    id: 4,
    course: "Certificate in MS Package",
    institute: "University of Tasmania",
    skills: '',
    achievements: []
  },
  {
    id: 5,
    course: "Certificate in Language Translation",
    institute: "University of Auckland",
    skills: '',
    achievements: []
  }
];

const Qualification = () => {
  return (
    <div id="edu-container">
      {qualificationData.map((data) => (
        <>
          <div className="edu-card" key={data.id}>
            <div className="title">
              <span className="status">✅</span>
              <h2>{data.course}</h2>
            </div>
            <div className="institute">
              <h3>{data.institute}</h3>
            </div>
          </div>
          <hr />
        </>
        )
      )}
    </div>
  )
}

export default Qualification;