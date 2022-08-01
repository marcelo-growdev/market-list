import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  addOne,
  selectAll,
  updateOne,
} from '../../store/modules/items/ItemsSlice';

const Home: React.FC = () => {
  const items = useAppSelector(selectAll);
  const dispatch = useAppDispatch();

  const [description, setDescription] = useState<string>('');

  useEffect(() => {
    console.log('selectall', items);
  }, [items]);

  const handleAdd = () => {
    dispatch(
      addOne({ uid: description + items.length, checked: false, description })
    );
    setDescription('');
  };

  const handleClick = (uid: string) => {
    dispatch(updateOne({ id: uid, changes: { checked: true } }));
  };

  return (
    <Grid container spacing={2}>
      <Grid item container xs={12}>
        <Grid item xs={12}>
          <Typography variant="h3">Adicionar Item</Typography>
        </Grid>
        <Grid item xs={10}>
          <TextField
            name="description"
            label="Descrição"
            fullWidth
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <Button variant="outlined" onClick={handleAdd}>
            Adicionar
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        {items.map((item) => (
          <Paper elevation={3} onClick={() => handleClick(item.uid)}>
            {!item.checked && (
              <Typography variant="h4">{item.description}</Typography>
            )}
            {item.checked && (
              <Typography variant="h4" className="line-through	">
                {item.description}
              </Typography>
            )}
          </Paper>
        ))}
      </Grid>
    </Grid>
  );
};

export default Home;
