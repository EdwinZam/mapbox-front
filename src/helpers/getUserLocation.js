export async function getUserLocation() {
  try {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    return [position.coords.longitude, position.coords.latitude];
  } catch (error) {
    alert("No se pudo obtener la geolocalización");
    console.log(error);
    throw error;
  }
}
