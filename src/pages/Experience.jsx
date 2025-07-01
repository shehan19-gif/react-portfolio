import '../page-css/Experience.css';

const jobsList = [
  {
    id: 1,
    title: 'Lead Engineer',
    duration: '2024 - present',
    company: '99X',
    address: 'colombo-10',
    other: {}
  },
  {
    id: 2,
    title: 'Full-Stack Developer',
    duration: '2023 - 2024',
    company: 'Virtusa',
    address: 'colombo-07',
    other: {}
  },
  {
    id: 3,
    title: 'Software Engineer',
    duration: '2022 - 2023',
    company: 'HCL Tech',
    address: 'colombo-09',
    other: {}
  },
  {
    id: 4,
    title: 'QA Engineer',
    duration: '2021 - 2022',
    company: 'ABC Company',
    address: 'colombo-10',
    other: {}
  },
  {
    id: 5,
    title: 'Associate Developer',
    duration: '2021 - 2022',
    company: 'XYZ Company',
    address: 'colombo-10',
    other: {}
  }
];

const Experience = () => {
  return (
    <div id='exp-container'>
      {jobsList.map(job => (
        <>
          <div className="exp-card" key={job.id}>
            <div className="job-title">
              <h2>{job.title}</h2>
              <h4>{job.duration}</h4>
            </div>
            <div className="company-data">
              <h3>{job.company}</h3>
              <h5>{job.address}</h5>
            </div>
          </div>
          <hr />
        </>
      ))}
    </div>
  )
}

export default Experience;