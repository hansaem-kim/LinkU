export const createAbout = (about) => (
    $.ajax({
      method: 'POST',
      url: '/api/abouts',
      data: { about }
    })
);

export const updateAbout = (about) => (
    $.ajax({
      method: 'PATCH',
      url: `/api/abouts/${about.id}`,
      data: { about }
    })
);

export const fetchAllAbouts = (userId) => (
    $.ajax({
        method: 'GET',
        url: '/api/abouts',
        data: { userId }
    })
);

export const deleteAbout = (aboutId) => (
    $.ajax({
      method: 'DELETE',
      url: `/api/abouts/${aboutId}`
    })
);