import acl from '../assets/logos/acl.svg'
import airflow from '../assets/logos/airflow.svg'
import albertsons from '../assets/logos/albertsons.png'
import amazon from '../assets/logos/amazon.png'
import asu from '../assets/logos/asu.png'
import bigquery from '../assets/logos/bigquery.svg'
import cvf from '../assets/logos/cvf.svg'
import iclr from '../assets/logos/iclr.svg'
import ieee from '../assets/logos/ieee.svg'
import java from '../assets/logos/java.svg'
import plos from '../assets/logos/plos.png'
import python from '../assets/logos/python.png'
import snowflake from '../assets/logos/snowflake.png'
import spelll from '../assets/logos/spelll.png'
import vodafone from '../assets/logos/vodafone.svg'
import walmart from '../assets/logos/walmart.svg'

// Company and tool logos: each one's tile colour and how much of the tile it fills.
export const logos = {
  walmart: { src: walmart, tile: '#0071dc', fit: 0.72 },
  albertsons: { src: albertsons, tile: '#ffffff', fit: 0.82 },
  amazon: { src: amazon, tile: '#ff6200', fit: 1 },
  vodafone: { src: vodafone, tile: '#ffffff', fit: 0.8 },
  asu: { src: asu, tile: '#ffffff', fit: 1 },
  python: { src: python, tile: '#ffffff', fit: 0.8 },
  snowflake: { src: snowflake, tile: '#ffffff', fit: 1 },
  bigquery: { src: bigquery, tile: '#ffffff', fit: 0.76 },
  java: { src: java, tile: '#ffffff', fit: 0.82 },
  airflow: { src: airflow, tile: '#ffffff', fit: 0.8 },
  ieee: { src: ieee, tile: '#00629b', fit: 0.88 },
  iclr: { src: iclr, tile: '#ffffff', fit: 0.88 },
  plos: { src: plos, tile: '#2a2d2b', fit: 0.84 },
  cvf: { src: cvf, tile: '#ffffff', fit: 0.74 },
  spelll: { src: spelll, tile: '#ffffff', fit: 0.9 },
  acl: { src: acl, tile: '#ffffff', fit: 0.82 },
}
