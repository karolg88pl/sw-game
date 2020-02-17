import React from 'react'
import Card from '@material-ui/core/Card';
import { CardContent, Typography } from '@material-ui/core';
import { CardType } from '../types';
import * as Styles from './styles'

type Props = {
    data: CardType
}

export const ItemCard: React.FC<Props> = ({ data }) => {
    return (
        <Styles.Wrapper>
            <Card>
                <CardContent>
                    <Typography color="textSecondary">
                        Name: {data.name}
                    </Typography>
                    <Typography color="textSecondary">
                        Power: {data.parameter}
                    </Typography>
                </CardContent>
            </Card>
        </Styles.Wrapper>
    )
}