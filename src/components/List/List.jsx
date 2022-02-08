import React, { useState } from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, Select, FormControl } from '@material-ui/core'

import PlaceDetails from '../PlaceDetails/PlaceDetails'

import useStyles from './styles'

const List = ({ places }) => {
  const classes = useStyles()
  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState('')

  return (
    <div className={classes.container}>
      <Typography variant='h4'>
        restaurants, hotels & attractions around you
      </Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value='restaurants'>restaurants</MenuItem>
          <MenuItem value='hotels'>hotels</MenuItem>
          <MenuItem value='attractions'>attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>all</MenuItem>
          <MenuItem value={3}>abone 3.0</MenuItem>
          <MenuItem value={4}>above 4.0</MenuItem>
          <MenuItem value={4.5}>above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default List
