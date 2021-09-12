export const createExperience = (experience) => (
    $.ajax({
      method: 'POST',
      url: '/api/experiences',
      data: { experience }
    })
);

export const updateExperience = (experience) => (
    $.ajax({
      method: 'PATCH',
      url: `/api/experiences/${experience.id}`,
      data: { experience }
    })
);

export const fetchAllExperiences = (userId) => (
    $.ajax({
        method: 'GET',
        url: '/api/experiences',
        data: { userId }
    })
);

export const deleteExperience = (experienceId) => (
    $.ajax({
      method: 'DELETE',
      url: `/api/experiences/${experienceId}`
    })
);