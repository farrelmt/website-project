import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import AboutImg from '../components/AboutImg';

function AboutPage(props) {

    return(
        <div>
             <Hero title={props.title} />


            <Content>
                <AboutImg />
                <br/> <br/> <br/>

                <p>Nama    : Farrel Muhammad Taqi </p>
                
                <p>NRP     : 05111840000071 </p>
                
                <p>Kelas   : Pemrograman Web C </p>
                
                <p>Github  : <a href="https://github.com/farrelmt/website-project" target="_blank">Link</a> </p>
                <br/>

                <p>Skill</p>

                 <ul className="list-group px-3">
                    <li>Programming</li>
                    <li>3D Desain</li>
                    <li>Game Development</li>
                </ul> 
                <br/>

                <br/>
                
                <table className="table table-borderless table-dark">
                    <tr>
                        <th>Contact</th>
                        <th>Details</th>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>farrelmuhammadtaqi@gmail.com</td>
                    </tr>
                    <tr>
                        <th>Discord</th>
                        <td>Farrel#6890</td>
                    </tr>
                </table> 

            </Content>

        </div>
    );
}

export default AboutPage;