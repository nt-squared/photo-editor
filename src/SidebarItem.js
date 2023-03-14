import React from 'react'

export default function SidebarItem({ name, active, handleClicked }) {
    return (
        <button
            type="button"
            className={`sidebar-item ${active ? 'active' : ''}`}
            onClick={handleClicked}
        >
            {name}
        </button>
    )
}
