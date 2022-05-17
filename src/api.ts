const ACCESS_TOKEN_MAP_BOX =
"pk.eyJ1IjoicGluYXJlYmVjY2EyMDE0IiwiYSI6ImNsM2Fvc2Z1azA3amozY3AxZDA0Y2V3M3YifQ.glv6eCrJmUpIUtCKek0NIg";

export const fetchLocalMapBox = (local: string) =>
fetch(
  `https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?${ACCESS_TOKEN_MAP_BOX}`
).then(response => response.json()).then(data => data);

export const fetchUserGithub = (login: string) =>
fetch(`https://api.github.com/users/${login}`).then(response => response.json()).then(data => data);