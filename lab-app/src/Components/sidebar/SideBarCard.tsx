import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Divider, List, ListItem, ListItemText } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PrintIcon from '@mui/icons-material/Print';
import PreviewIcon from '@mui/icons-material/Preview';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function SideBarCard(props:any) {
  console.log("hello",props.GetData);
  const [expanded, setExpanded] = React.useState(false);
  //const [PatientArray, setPatientArray] = React.useState<any[]>([]);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const nonEmptyArray = props.GetData.filter((obj:any) => Object.keys(obj).length !== 0);
  
//console.log("PatientArray",PatientArray);

  return (
    <Card sx={{width:"100%", maxWidth: "500px",background:"#ececf8",height:"100%", maxHeight:"590px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Patient List"
        subheader="Count"
      />
      {/* <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        <List sx={{ 
            width: '100%',
            position: 'relative',
            overflow: 'auto',
            maxHeight: '350px', }}>
      {[...nonEmptyArray].map((value:any) => (<>
        <ListItem
          key={value.id}
          disableGutters
          secondaryAction={
            <IconButton aria-label="comment">
              <EditIcon />
              
            </IconButton>
          }
        >
          <ListItemText primary={`${value.Name}`} />
          
        </ListItem>
        <Divider />
      </>
      ))}
    </List>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Preview" onClick={()=>{console.log("Preview")}}>
          <PreviewIcon />
        </IconButton>
        <IconButton aria-label="Print" onClick={()=>{console.log("Print")}}>
          <PrintIcon />
        </IconButton>
        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
      </CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          
        </CardContent>
      </Collapse> */}
    </Card>
  );
}