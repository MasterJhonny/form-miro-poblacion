const postData = async (data) => {
  try {
    const response = await fetch("http://localhost:3000/datos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      console.log("Datos enviados correctamente");
      return response.json();
    } else {
      console.error("Error al enviar los datos");
      throw new Error("Error al enviar los datos");
    }
  } catch (error) {
    console.error("Error de red:", error);
  }
};

export { postData };
