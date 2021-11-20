const Searchbar = () => {
    return (
        <div className="relative hidden xl:block border rounded">
            <input type="search" placeholder="SEARCH PUMA.COM" className="pl-10 py-2 rounded text-sm" />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <i class="fa fa-search" aria-hidden="true"></i>
            </div>
        </div>
    )
}

export default Searchbar
