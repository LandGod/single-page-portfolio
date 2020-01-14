import React from 'react';
import styles from './styles/ProjectCard.module.css';

class ProjectCard extends React.Component {

    // Props:
    // width: "single" or "double" - Makes the component 4 or 8 columns in medium view
    // imageName: file name of image to be displayed
    // title: Name of project/title
    // repoLink: link to project repo
    // deployLink: link to deployed project


    state = {
        width: this.props.width || 'single', // single or double (4 col / 8 col)
        imageName: this.props.imageName
    }

    render() {
        return (
            <a className={`col-${this.state.width === 'double' ? '12' : '6'} col-md-${this.state.width === 'double' ? '8' : '4'} p-1 p-md-2`} href={this.props.repoLink} target="_blank">
                <div className={styles.portfolio_item}>
                    <img className={`img-fluid ${styles.portfolio_item_img}`} src={`${process.env.PUBLIC_URL}/${this.state.imageName}`} alt={this.props.title} />
                </div>
                <div className={styles.title_overlay}>{this.props.title[0].toUpperCase() + this.props.title.slice(1)}</div>
                {this.props.deployLink ? (
                    <div className={styles.repo_overlay}>
                        <a className={styles.repo_overlay_a} href={this.props.deployLink} target="_blank">Deployed</a>
                    </div>
                ) : ''}
            </a>
        );
    }
}

export default ProjectCard;