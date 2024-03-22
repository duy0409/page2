import Image from "next/image";
import styles from "./page.module.css";
import bar from "./config/bar.json";
import bgStyles from "./css/bgStyles.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      {bar.map(item => (
        <div key={item.id} className={bgStyles.bg}>
          <a href={`/detail/${item.id}`}>
            <Image
              src={item.image}
              alt="k300"
              width={1728}
              height={200}
              layout="responsive"
              objectFit="cover"
            />
          </a>
          <div className={bgStyles.container}>
          <div key={item.id} className={bgStyles.img}>
            <a href={`/detail/${item.id}` }>
              <Image
               src={item.image1}
               alt="k300"
               width={550}
               height={900}
               objectFit="cover"
              />
            </a>
            <div className={bgStyles.text}>{item.text}</div>
          </div>
          <div className={bgStyles.bar}>
          <div className={bgStyles.title}>{item.title} </div>
          <div className={bgStyles.text1}><Link href={"https://shp.ee/de5snva"}>{item.text1}</Link></div>
          <div className={bgStyles.image2}><Image src={item.image2} alt="thek300" width={400} height={500}/></div>
          <div className={bgStyles.title1}>{item.title}</div>
          <div className={bgStyles.text2}><Link href={"https://shp.ee/38m8gq1"}>{item.text2}</Link></div>
          <div className={bgStyles.image3}><Image src={item.image3} alt="thek300" width={400} height={500}/></div>
          <div className={bgStyles.title2}>{item.title2}</div>
          <div className={bgStyles.text3}><Link href={"https://shp.ee/qmujire"}>{item.text3}</Link></div>
          <div className={bgStyles.image4}><Image src={item.image4} alt="thek300" width={400} height={500}/></div>
          </div>
        </div>
        </div>
      ))}
    </div>
  );
}
