import React from 'react';
import { AppBar, Box, Button, Divider, Drawer, Grid, Hidden, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { Menu, AccountCircle, VideoCall, MoreVert, Apps, Home as HomeIcon, Subscriptions, Whatshot, VideoLibrary, History, AddCircle } from '@material-ui/icons';

const videos = [
  {
    id: 1,
    title:
      'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
    channel: 'Lucas Nhimi',
    views: '11 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb1.png',
  },
  {
    id: 2,
    title:
      'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
    channel: 'Lucas Nhimi',
    views: '957 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb2.png',
  },
  {
    id: 3,
    title:
      'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
    channel: 'Lucas Nhimi',
    views: '106 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb3.png',
  },
  {
    id: 4,
    title:
      'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
    channel: 'Lucas Nhimi',
    views: '5,6 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb4.png',
  },
  {
    id: 5,
    title:
      'EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26',
    channel: 'Lucas Nhimi',
    views: '2,2 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb5.png',
  },
  {
    id: 6,
    title: 'COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01',
    channel: 'Lucas Nhimi',
    views: '233 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb6.png',
  },
  {
    id: 7,
    title:
      'PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01',
    channel: 'Lucas Nhimi',
    views: '118 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb7.png',
  },
  {
    id: 8,
    title:
      'GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04',
    channel: 'Lucas Nhimi',
    views: '1,9 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb8.png',
  },
];

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color='inherit' className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
          >
            <Menu />
          </IconButton>
          <img src="/images/preto.png" alt="logo" className={classes.logo} />
          <div className={classes.grow} />
          <IconButton
            className={classes.icons}
            color='inherit'
          >
            <VideoCall />
          </IconButton>
          <IconButton
            className={classes.icons}
            color='inherit'
          >
            <Apps />
          </IconButton>
          <IconButton
            className={classes.icons}
            color='inherit'
          >
            <MoreVert />
          </IconButton>

          <Button startIcon={<AccountCircle />} variant='outlined' color='secondary'>Fazer Login</Button>
        </Toolbar>
      </AppBar>
      <Box display='flex'>
        <Hidden mdDown>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{ paper: classes.drawerPaper }}
          >
            <Toolbar />
            <div className={classes.drawerContainer}>
              <List>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItensText
                    }}
                    primary={'Início'}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<Whatshot />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItensText
                    }}
                    primary={'Em alta'}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<Subscriptions />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItensText
                    }}
                    primary={'Inscrições'}
                  />
                </ListItem>
              </List>

              <Divider />

              <List>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<VideoLibrary />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItensText
                    }}
                    primary={'Biblioteca'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<History />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItensText
                    }}
                    primary={'Histórico'}
                  />
                </ListItem>
              </List>

              <Divider />

              <Box p={3}>
                <Typography variant='body2'>
                  Faça login para curtir os vídeos, comentar e se inscrever.
            </Typography>
                <Box mt={2}>
                  <Button
                    variant='outlined'
                    color='secondary'
                    startIcon={<AccountCircle />}
                  >
                    Fazer login
                </Button>
                </Box>
              </Box>

              <Divider />

              <List>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<AddCircle />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItensText
                    }}
                    primary={'Música'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<AddCircle />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItensText
                    }}
                    primary={'Esporte'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<AddCircle />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItensText
                    }}
                    primary={'Jogos'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<AddCircle />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItensText
                    }}
                    primary={'Filmes'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<AddCircle />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItensText
                    }}
                    primary={'Notícias'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<AddCircle />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItensText
                    }}
                    primary={'Ao vivo'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<AddCircle />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItensText
                    }}
                    primary={'Destaque'}
                  />
                </ListItem>
              </List>
            </div>
          </Drawer>
        </Hidden>
        <Box p={3}>
          <Toolbar />
          <Typography
            variant='h5'
            calor='textPrimary'
            style={{ fontWeight: 600, fontSize: 20, marginBottom: 20}}
          >
            Recomendados
          </Typography>

          <Grid container spacing={3}>
            {
              videos.map((item, index) => (
                <Grid lg={3} md={4} sm={6} xs={12} item>
                  <Box key={index}>
                    <img
                      style={{ width: '100%' }}
                      alt={item.title}
                      src={item.thumb}
                    />
                    <Box>
                      <Typography
                        style={{ fontWeight: 600 }}
                        gutterBottom
                        variant='body1'
                        color='textPrimary'
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        display='block'
                        variant='body2'
                        color='textSecondary'
                      >
                        {item.channel}
                      </Typography>
                      <Typography variant='body2' color='textSecondary'>
                        {`${item.views} • ${item.date}`}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))
            }
          </Grid>
        </Box>
      </Box>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  },
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: 240,
    flexShrink: 0
  },
  drawerPaper: {
    width: 240,
    borderRight: 'none'
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4
  },
  listItensText: {
    fontSize: 14
  },
  logo: {
    height: 25
  },
  icons: {
    paddingRight: theme.spacing(3)
  },
  grow: {
    flexGrow: 1
  }
}))


export default Home;