import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addOne, selectAll } from '../../store/modules/items/ItemsSlice';

const Home: React.FC = () => {
  const items = useAppSelector(selectAll);
  const dispatch = useAppDispatch();

  const [description, setDescription] = useState<string>('');
  const ref = useRef<HTMLInputElement>();

  useEffect(() => {
    console.log('selectall', items);
  }, [items]);

  const handleAdd = () => {
    dispatch(
      addOne({ uid: description + items.length, checked: false, description })
    );
    setDescription('');
  };

  return (
    <Grid container spacing={2}>
      <Grid item spacing={2} container xs={12}>
        <Grid item xs={12}>
          <Typography variant="h3">Adicionar Item</Typography>
        </Grid>
        <Grid item xs={10}>
          <TextField
            name="description"
            label="Descrição"
            fullWidth
            value={description}
            inputRef={ref}
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
          <ItemList
            uid={item.uid}
            item={item.description}
            key={item.uid}
            checked={item.checked}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default Home;
