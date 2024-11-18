import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export default function InfoBox({info}) {
    const initial_URL="https://plus.unsplash.com/premium_photo-1668161358393-2a78fbd1ed6d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGR1c3R5JTIwd2VhdGhlciUyMGltYWdlfGVufDB8fDB8fHww";
    const HOT_URL="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwc3VtbWVyJTIwd2VhdGhlciUyMGltYWdlfGVufDB8fDB8fHww"
    const COLD_URL="https://plus.unsplash.com/premium_photo-1668792545129-72d876248c1b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ludGVyJTIwd2VhdGhlciUyMGltYWdlfGVufDB8fDB8fHww"
    const RAIN_URL="https://images.unsplash.com/photo-1723226766511-b81dc514548e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbiUyMHdlYXRoZXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"

    return (
        <div className="InfoBox">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAIN_URL : info.temp>15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity>80 ? <ThunderstormIcon/> : info.temp>15 ? <BeachAccessIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
        <p>Temperature={info.temp}&deg;C</p>
        <p>Humidity={info.humidity}&deg;C</p>
        <p>Min Temp={info.tempMin}&deg;C</p>
        <p>Max Temp={info.tempMax}&deg;C</p>
        <p>The weather can be described as <i>{info.weather}</i> and feels like ={info.feelsLike}&deg;C</p>
        <p></p>
        </Typography>
      </CardContent>
      
    </Card>
        </div>
    );
}