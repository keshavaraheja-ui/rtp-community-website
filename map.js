// Google Maps with Event Locations
// This script creates an interactive map showing RTP and event locations

function initMap() {
    // Center of Research Triangle Park
    const rtpCenter = { lat: 35.8992, lng: -78.8636 };
    
    // Event locations (all in RTP area)
    const eventLocations = [
        {
            title: 'RTP Community Festival',
            position: { lat: 35.8992, lng: -78.8636 },
            description: 'Annual celebration of the RTP community'
        },
        {
            title: 'Tech Innovation Summit',
            position: { lat: 35.9050, lng: -78.8700 },
            description: 'Quarterly technology and innovation events'
        },
        {
            title: 'Networking Events',
            position: { lat: 35.8930, lng: -78.8570 },
            description: 'Monthly professional networking opportunities'
        }
    ];
    
    // Create map centered on RTP
    const map = new google.maps.Map(document.getElementById('rtp-map'), {
        zoom: 13,
        center: rtpCenter,
        mapTypeId: 'roadmap',
        styles: [
            {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'on' }]
            }
        ]
    });
    
    // Add marker for RTP center
    const rtpMarker = new google.maps.Marker({
        position: rtpCenter,
        map: map,
        title: 'Research Triangle Park',
        icon: {
            url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        }
    });
    
    // Add info window for RTP
    const rtpInfoWindow = new google.maps.InfoWindow({
        content: '<div style="padding: 10px;"><h3 style="margin: 0 0 10px 0; color: #004499;">Research Triangle Park</h3><p style="margin: 0;">North Carolina\'s Innovation Hub</p></div>'
    });
    
    rtpMarker.addListener('click', function() {
        rtpInfoWindow.open(map, rtpMarker);
    });
    
    // Add markers for each event location
    eventLocations.forEach(function(event) {
        const marker = new google.maps.Marker({
            position: event.position,
            map: map,
            title: event.title,
            icon: {
                url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
            }
        });
        
        const infoWindow = new google.maps.InfoWindow({
            content: '<div style="padding: 10px;"><h3 style="margin: 0 0 10px 0; color: #00aa55;">' + event.title + '</h3><p style="margin: 0;">' + event.description + '</p></div>'
        });
        
        marker.addListener('click', function() {
            infoWindow.open(map, marker);
        });
    });
    
    // Fit map to show all markers
    const bounds = new google.maps.LatLngBounds();
    bounds.extend(rtpCenter);
    eventLocations.forEach(function(event) {
        bounds.extend(event.position);
    });
    map.fitBounds(bounds);
}

// Fallback if Google Maps API is not available
function initMapFallback() {
    const mapContainer = document.getElementById('rtp-map');
    if (mapContainer) {
        // Use embed iframe as fallback
        mapContainer.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202844.538551789!2d-79.1!3d35.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ace472d0e3b5b5%3A0x1e3b8c8c8c8c8c8c!2sResearch%20Triangle%20Park%2C%20NC!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    }
}

