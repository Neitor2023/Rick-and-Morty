const LoaderEnd = () => {
    return (
    setTimeout(() => {
        let container_loader = document.querySelector('.loader_url')
        container_loader.style.opacity = 0
        container_loader.style.visibility = 'hidden'
    }, 2500)
    //     <div>
            
    //     </div>
    );
};

export default LoaderEnd;