const getWeatherInfo = async (latitude, longitude) => {
  try {
    const response = await fetch(
      `${process.env.OPENWEATHERMAP_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=metric`
    )
    const data = await response.json()
    return data?.weather[0]
  } catch (error) {
    console.error("Error fetching weather info:", error.message)
    return null
  }
}

const getTemperatureInfo = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `${process.env.OPENWEATHERMAP_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=metric`
      )
      const data = await response.json()
      return data?.main
    } catch (error) {
      console.error("Error fetching temperature info:", error.message)
      return null
    }
}

const getWindInfo = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `${process.env.OPENWEATHERMAP_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=metric`
      )
      const data = await response.json()
      return data?.wind
    } catch (error) {
      console.error("Error fetching wind info:", error.message)
      return null
    }
}


const getAQIInfo = async (latitude, longitude) => {
  try {
    const response = await fetch(
        `${process.env.OPENWEATHERMAP_API_URL}/air_pollution?lat=${latitude}&lon=${longitude}&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=metric`
      )
    const data = await response.json()

    return data?.list[0]
    
  } catch (error) {
    console.error("Error fetching AQI info:", error.message)
    return null
  }
}

export { getWeatherInfo, getAQIInfo, getTemperatureInfo, getWindInfo }