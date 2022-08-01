import { Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { updateOne } from '../../store/modules/items/ItemsSlice';

interface ItemListProps {
  uid: string;
  item: string;
  checked: boolean;
}
const ItemList: React.FC<ItemListProps> = ({ uid, item, checked }) => {
  const dispatch = useAppDispatch();

  const [done, setDone] = useState<boolean>(false);

  const handleClick = () => {
    console.log('clicou');
    dispatch(updateOne({ id: uid, changes: { checked: true } }));
  };

  useEffect(() => {
    setDone(checked);
    console.log(done);
  }, [checked]);

  return (
    <Paper elevation={3} onClick={handleClick}>
      {!done && <Typography variant="h4">{item}</Typography>}
      {done && (
        <Typography variant="h4" className="line-through	">
          {item}
        </Typography>
      )}
    </Paper>
  );
};

export default ItemList;
