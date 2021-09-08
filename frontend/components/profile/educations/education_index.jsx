class EducationIndex extends React.Component {
    render() {
      const { currentUser, match, openModal, educations } = this.props;
      const newEduBtn = currentUser == match.params.id ? (
        <button onClick={() => openModal('createEdu')} className='open-edu'>
          <i className="fas fa-plus"></i>
        </button>
      ) : null;
  
      if (!educations.length) return null;
  
      return (
        <div className='edu-index'>
          <h1>Education</h1>
          {newEduBtn}
          <ul>
            {educations.map(edu => (
              <EducationIndexItemContainer key={edu.id} education={edu}/>
              ))}
          </ul>
        </div>
      );
    }
}